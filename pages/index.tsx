import { getTrees, Tree  } from "../lib/trees";

type HomePageProps = {
  trees: Tree[]
}

export async function getEdgeProps() {
  const trees = await getTrees()
  return {
    props: {
      trees
    } as HomePageProps
  }
}

export default function HomePage({ trees }: HomePageProps) {
  return (
    <>
    <h1>
      Welcome to EdgeTree
    </h1>
    <ul>{trees.map(tree => (
      <li key={`tree-item-${tree.slug}`}>
        <a href={`/tree/${tree.slug}`}>
        {tree.name}
        </a>
      </li>
    ))}</ul>
    </>
  );
}
