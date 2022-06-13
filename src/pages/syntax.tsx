import { DocPage } from '@/templates'
import { Syntax } from '@/components'

const EXAMPLE_01 = `
import { useEffect, useState } from 'react'
`

const EXAMPLE_02 = `
function createElement({ node, style, useInlineStyles, key }) {

  const { properties, type, tagName, value } = node;

  if (type === "text") {
    return value;

  } else if (tagName) {
    const TagName = tagName;
    const childrenCreator = createChildren(style, useInlineStyles);
    const props = (
      useInlineStyles
      ? { style: createStyleObject(properties.className, style) }
      : { className: createClassNameString(properties.className) }
    );

    const children = childrenCreator(node.children);

    return <TagName key={key} {...props}>{children}</TagName>;
  }
}
`

export default function SyntaxPage({ doc }) {
  return (
    <DocPage title="Syntax" markdown={doc}>
      <div className="flex flex-col gap-4">
        <Syntax lang="typescript">{EXAMPLE_01}</Syntax>
        <Syntax lang="typescript">{EXAMPLE_02}</Syntax>
      </div>
    </DocPage>
  )
}

export async function getStaticProps() {
  const content = await require('../components/Syntax/README.md')

  return {
    props: {
      doc: JSON.stringify(content),
    },
  }
}
