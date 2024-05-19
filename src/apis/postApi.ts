import useSWR from "swr";

interface Post {
    "userId": number,
    "id": number,
    "title": string,
    "completed": boolean
}
interface postType {
    data: Post | undefined,
    error: Error | undefined,
    isLoading: boolean
}

const fetcher =  async (url: string):Promise<Post> => {
    const res = await fetch(url)
    if(!res.ok) {
        throw new Error(`Failed to fetch: ${res.statusText}`)
    }
    const data = await res.json()
    return data;
}

const usePosts = ():postType  => {
    const { data, error, isLoading } = useSWR<Post>('https://jsonplaceholder.typicode.com/todos/1', fetcher)
    return {data, error, isLoading}
}
export default usePosts;