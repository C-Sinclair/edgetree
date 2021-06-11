import { getTreeBySlug, Tree } from "../../lib/trees"

type TreePageProps = {
  tree: Tree
}

export async function getEdgeProps({ params }) {
  const { slug } = params
  const tree = await getTreeBySlug(slug)

  return { props: { tree } as TreePageProps}
}

export default function TreePage({ tree }: TreePageProps) {
  return (
    <h1>{tree.name}</h1>
  )
}