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
      <div className="page-component">
        <h1 className="page-component__title"> Syntax </h1>

        <hr />

        <div className="page-component__content">
          <Syntax lang="typescript">{EXAMPLE_01}</Syntax>
          <Syntax lang="typescript">{EXAMPLE_02}</Syntax>
        </div>
      </div>
    </Page>
  )
}
