import withLoading, { withLoadingProps } from "./HOC/withLoading"

const Title = (props: withLoadingProps) => {
  return (
    <div>
        {props?.title}
    </div>
  )
}

export default withLoading(Title)