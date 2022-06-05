import { Fragment, ReactElement, ReactNode } from 'react'

type ElseProps = {
  children: ReactNode
}

export function Else({ children }: ElseProps) {
  return <Fragment> {children} </Fragment>
}

type IfProps = {
  children: ReactElement | [ReactElement, ReactElement]
  condition: boolean
}

export function If({ children, condition }: IfProps) {
  let ifElement = children
  let elseElement = null

  if ((children as [ReactElement, ReactElement]).length === 2) {
    ifElement = children[0]
    elseElement = children[1]
  }

  if (condition) {
    return <Fragment>{ifElement}</Fragment>
  } else {
    return <Fragment>{elseElement}</Fragment>
  }
}
