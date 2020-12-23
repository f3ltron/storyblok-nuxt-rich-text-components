<template>
  <div>
    <RichTextRenderer :document="text" />
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: [String, Object],
      default: '',
    },
  },
  computed: {
    richtext() {
      return typeof this.text === 'string'
        ? this.text
        : this.$storyapi.richTextResolver.render(this.text)
    },
  },
}
</script>

<style lang="postcss" scoped>
ul {
  list-style: disc !important;
  padding-left: 40px;
}
ol {
  display: block;
  list-style-type: decimal;
  margin-top: 1em;
  margin-bottom: 1em;
  margin-left: 0;
  margin-right: 0;
  padding-left: 40px;
}
@media print {
  *,
  *:before,
  *:after {
    background: transparent !important;
    color: #000 !important;
    box-shadow: none !important;
    text-shadow: none !important;
  }

  a,
  a:visited {
    text-decoration: underline;
  }

  a[href]:after {
    content: ' (' attr(href) ')';
  }

  abbr[title]:after {
    content: ' (' attr(title) ')';
  }

  a[href^='#']:after,
  a[href^='javascript:']:after {
    content: '';
  }

  pre,
  blockquote {
    border: 3px solid theme('colors.neutral1.tertiary');
    page-break-inside: avoid;
  }

  img {
    page-break-inside: avoid;
  }

  img {
    max-width: 100% !important;
  }

  p,
  h2 {
    orphans: 3;
    widows: 3;
  }

  h2 {
    page-break-after: avoid;
  }
}

pre,
code {
  font-family: Menlo, Monaco, 'Courier New', monospace;
}

pre {
  padding: 0.5rem;
  line-height: 1.25;
  overflow-x: scroll;
}

a,
a:visited {
  color: theme('colors.neutral1.secondary');
}

a:hover,
a:focus,
a:active {
  color: theme('colors.neutral1.primary');
}

p {
  font-size: 1rem;
}

h2 {
  font-style: normal;
  font-weight: normal;
  font-size: 3rem;
  line-height: 3rem;
}
@media screen and (max-width: 425px) {
  h2 {
    font-size: 2rem;
    line-height: 3rem;
  }
}

small {
  font-size: 0.707em;
}

img,
svg {
  max-width: 100%;
}

h2 {
  margin-bottom: 1.15rem;
  padding-bottom: 0.5rem;
}

blockquote {
  border-left: 6px solid theme('colors.neutral2');
  padding: 1rem;
  margin-bottom: 1rem;
  margin-top: 1rem;
}

blockquote p {
  margin-bottom: 0;
}

pre,
code {
  @apply bg-gray-300;
  margin-bottom: 1rem;
  overflow-x: scroll;
  white-space: pre;
  margin-top: 1rem;
}
hr {
  margin-top: 1rem;
  margin-bottom: 1rem;
}
</style>
