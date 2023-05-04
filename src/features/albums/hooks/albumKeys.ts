export const albumKeys = {
  all: () => ['albums'] as const,
  one: (id: string) => [...albumKeys.all(), id] as const,
  several: (ids: string) => [...albumKeys.all(), ids] as const,
};
