import { useQuery } from "@apollo/client"
import { getArticlesQuery } from "./queries"

export async function useArticles(){
    const {data} = useQuery(getArticlesQuery)

    console.log(data?.Articles?.items);
    
    return data;
}