<script setup lang="ts">
import { computed, nextTick, onMounted, ref, watch } from 'vue'
import { useData, useRoute } from 'vitepress'

type GiscusConfig = {
  enabled?: boolean
  repo?: string
  repoId?: string
  category?: string
  categoryId?: string
  mapping?: string
  strict?: string
  reactionsEnabled?: string
  inputPosition?: string
  theme?: string
  lang?: string
}

const route = useRoute()
const container = ref<HTMLElement | null>(null)
const { frontmatter, theme, isDark } = useData()

const config = computed<GiscusConfig>(() => (theme.value?.giscus ?? {}) as GiscusConfig)
const isHome = computed(() => frontmatter.value?.layout === 'home')
const commentsDisabled = computed(() => frontmatter.value?.comment === false)
const enabled = computed(() => config.value.enabled !== false && !isHome.value && !commentsDisabled.value)
const configured = computed(() => Boolean(config.value.repo && config.value.repoId && config.value.categoryId))

function mountGiscus() {
  if (!container.value) return
  container.value.innerHTML = ''

  if (!enabled.value || !configured.value) return

  const script = document.createElement('script')
  script.src = 'https://giscus.app/client.js'
  script.async = true
  script.crossOrigin = 'anonymous'

  script.setAttribute('data-repo', config.value.repo ?? '')
  script.setAttribute('data-repo-id', config.value.repoId ?? '')
  script.setAttribute('data-category', config.value.category ?? 'General')
  script.setAttribute('data-category-id', config.value.categoryId ?? '')
  script.setAttribute('data-mapping', config.value.mapping ?? 'pathname')
  script.setAttribute('data-strict', config.value.strict ?? '0')
  script.setAttribute('data-reactions-enabled', config.value.reactionsEnabled ?? '1')
  script.setAttribute('data-emit-metadata', '0')
  script.setAttribute('data-input-position', config.value.inputPosition ?? 'top')
  const giscusTheme = config.value.theme === 'preferred_color_scheme'
    ? 'preferred_color_scheme'
    : (isDark.value ? 'dark' : 'light')
  script.setAttribute('data-theme', giscusTheme)
  script.setAttribute('data-lang', config.value.lang ?? 'zh-CN')
  script.setAttribute('data-loading', 'lazy')

  container.value.appendChild(script)
}

onMounted(async () => {
  await nextTick()
  mountGiscus()
})

watch(() => route.path, async () => {
  await nextTick()
  mountGiscus()
})

watch(isDark, async () => {
  await nextTick()
  mountGiscus()
})
</script>

<template>
  <section v-if="enabled" class="comment-block">
    <h2 class="comment-title">评论</h2>
    <p v-if="!configured" class="comment-hint">
      评论系统未完成配置：请在 <code>docs/.vitepress/config.mts</code> 中填写
      <code>themeConfig.giscus.repoId</code> 与 <code>themeConfig.giscus.categoryId</code>。
    </p>
    <div ref="container" />
  </section>
</template>

<style scoped>
.comment-block {
  margin-top: 36px;
  padding-top: 20px;
  border-top: 1px solid rgba(31, 41, 51, 0.12);
}

.comment-title {
  margin: 0 0 12px;
  font-size: 18px;
  font-weight: 600;
}

.comment-hint {
  margin: 0 0 12px;
  color: var(--vp-c-text-2);
  font-size: 14px;
}
</style>
