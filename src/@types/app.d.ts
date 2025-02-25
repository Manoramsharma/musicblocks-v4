import type { TI18nLang } from './core/i18n';
import type { TComponentId } from './components';
import type { TFeatureFlagMenu } from './components/menu';
import type { TComponentDefinitionElementsPainter } from './components/painter';
import type { TComponentDefinitionElementsSinger } from './components/singer';

/** Type definition of an app configuration preset's component configuration. */
export type TAppComponentConfig =
    | {
          id: 'editor';
      }
    | {
          id: 'menu';
          flags: TFeatureFlagMenu;
      }
    | {
          id: 'painter';
          elements?: TComponentDefinitionElementsPainter[] | true;
      }
    | {
          id: 'singer';
          elements?: TComponentDefinitionElementsSinger[] | true;
      };

/** Type defintion of an app configuration preset. */
export interface IAppConfig {
    /** Configuration name. */
    name: string;
    /** Configuration description. */
    desc: string;
    /** Global flags. */
    env: {
        /** i18n language. */
        lang: TI18nLang;
    };
    /** List of components to load */
    components: TAppComponentConfig[];
}

/** Type definition for the map of items imported at app load. */
export type TAppImportMap = {
    lang: TI18nLang | undefined;
    assets: Record<string, boolean>;
    components: Partial<Record<TComponentId, boolean>>;
};
