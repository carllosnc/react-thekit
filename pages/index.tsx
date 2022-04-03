import { Page } from '@/templates'
import { useLoremIpsum } from '@/services'

export default function Home(){
  const { data, isError, isLoading } = useLoremIpsum()

  if(isLoading){
    return (
      <Page>
        <h1 className="font-bold"> loading... </h1>
       </Page>
    )
  }

  if(isError){
    return (
      <Page>
        <h1 className="font-bold text-red-500"> error </h1>
      </Page>
    )
  }

  console.log(data)

  return (
    <Page>
      <h1 className="font-bold"> home page </h1>
    </Page>
  )
}
