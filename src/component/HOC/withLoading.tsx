import { ComponentType, FC } from "react";
import usePosts from "../../apis/postApi";

export interface withLoadingProps {
    title?: string | undefined,
    [key: string]: any
}

const withLoading = (Element: ComponentType<withLoadingProps>) : FC => {
    return (props: {}): JSX.Element => {
        const {data, error, isLoading} = usePosts() 
        if(isLoading) return <div><p>Loading... please wait</p></div>
        if(error) return <div>An error occured try again later</div>
        return <Element title={data?.title} {...props} />
    }
}

export default withLoading;