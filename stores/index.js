import { useGroupStore } from "./modules/Groups"
import { useLevelStore } from "./modules/Levels"
import { useSectionStore } from "./modules/Sections"
import { useRelatedStore } from "./modules/Related"

export const MainStores = () => {
  return {
    GroupStore: useGroupStore(),
    LevelStore: useLevelStore(),
    SectionStore: useSectionStore(),
    RelatedStore: useRelatedStore(),
  }
}