import { Page } from '@/templates'
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

export default function SyntaxPage() {
  return (
    <Page>
      <div className="w-screen flex flex-col gap-4">
        <div className="flex flex-col gap-5 py-8 px-4 max-w-[600px] m-auto w-full">
          <h1 className="text-4xl"> Syntax </h1>

          <hr />

          <Syntax lang="typescript">{EXAMPLE_01}</Syntax>
          <Syntax lang="typescript">{EXAMPLE_02}</Syntax>
        </div>
      </div>
    </Page>
  )
}
