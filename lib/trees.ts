export type Tree = {
  name: string
  slug: string
}

const TREES: Tree[] = [{
  name: 'Elm',
  slug: 'elm'
}]

export async function getTrees(): Promise<Tree[]> {
  return TREES
}

export async function getTreeBySlug(slug: string): Promise<Tree> {
  return TREES.find((tree) => tree.slug === slug)
}