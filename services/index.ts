import Axios from 'axios'
import useSWR from 'swr'

export const HTTP = Axios.create({
  'baseURL': 'https://baconipsum.com/',
  'headers': {
    'Content-Type': 'application/json;charset=utf-8'
  }
})

export async function fetcher(url: string){
  const response = await HTTP.get(url)
  return response.data
}

export function useLoremIpsum(){
  const { data, error } = useSWR('/api/?type=all-meat&paras=2&start-with-lorem=1', fetcher)

  return {
    data: data,
    isLoading: !error && !data,
    isError: error
  }
}
