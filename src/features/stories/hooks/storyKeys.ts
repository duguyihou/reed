export const storyKeys = {
  all: () => ['stories'] as const,
  one: (id: string) => [...storyKeys.all(), id] as const,
  several: (ids: string) => [...storyKeys.all(), ids] as const,
};
