export type Pokemon = {
  abilities?: Array<{ability?: NameAndUrl; is_hidden?: boolean; slot?: number}>;
  base_experience?: number;
  forms?: NameAndUrl[];
  game_indices?: Array<{game_index?: number; version?: NameAndUrl}>;
  height?: number;
  held_items?: [];
  id?: number;
  is_default?: boolean;
  location_area_encounters?: string;
  moves?: Move[];
  name?: string;
  order?: number;
  past_types?: [];
  species?: NameAndUrl;
  sprites?: {
    back_default?: string;
    back_female?: string | null;
    back_shiny?: string;
    back_shiny_female?: string | null;
    front_default?: string;
    front_female?: string | null;
    front_shiny?: string;
    front_shiny_female?: string | null;
    other?: {
      dream_world?: {
        front_default?: string;
        front_female?: string;
      };
      home?: {
        front_default?: string;
        front_female?: string | null;
        front_shiny?: string;
        front_shiny_female?: string | null;
      };
    };
    versions?: Object;
  };
  stats?: Stat[];
  types?: Array<{
    slot?: number;
    type?: NameAndUrl;
  }>;
  weight?: number;
};

export type NameAndUrl = {
  name?: string;
  url?: string;
};

type Move = {
  move?: NameAndUrl;
  version_group_details?: VersionDetail[];
};

type VersionDetail = {
  level_learned_at?: number;
  move_learn_method?: NameAndUrl;
  version_group?: NameAndUrl;
};

type Stat = {
  base_stat?: number;
  effort?: number;
  stat?: NameAndUrl;
};
