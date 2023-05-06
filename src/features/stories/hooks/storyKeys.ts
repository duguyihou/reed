export const storyKeys = {
  all: () => ['topStories'] as const,
  list: (section: string) => [...storyKeys.all(), section] as const,
};
