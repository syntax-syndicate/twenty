import {
  Button,
  IconButton,
  IconDotsVertical,
  getOsControlSymbol,
  useIsMobile,
} from 'twenty-ui';

import { useCommandMenu } from '@/command-menu/hooks/useCommandMenu';
import { CommandMenuPages } from '@/command-menu/types/CommandMenuPages';
import { useIsFeatureEnabled } from '@/workspace/hooks/useIsFeatureEnabled';
import { FeatureFlagKey } from '~/generated/graphql';

export const PageHeaderOpenCommandMenuButton = () => {
  const { navigateCommandMenu } = useCommandMenu();

  const isCommandMenuV2Enabled = useIsFeatureEnabled(
    FeatureFlagKey.IsCommandMenuV2Enabled,
  );

  const isMobile = useIsMobile();

  return (
    <>
      {isCommandMenuV2Enabled ? (
        <Button
          Icon={IconDotsVertical}
          dataTestId="page-header-open-command-menu-button"
          size={isMobile ? 'medium' : 'small'}
          variant="secondary"
          accent="default"
          hotkeys={[getOsControlSymbol(), 'K']}
          ariaLabel="Open command menu"
          onClick={() => {
            navigateCommandMenu({
              page: CommandMenuPages.Root,
            });
          }}
        />
      ) : (
        <IconButton
          Icon={IconDotsVertical}
          size="medium"
          dataTestId="more-showpage-button"
          accent="default"
          variant="secondary"
          onClick={() => {
            navigateCommandMenu({
              page: CommandMenuPages.Root,
            });
          }}
        />
      )}
    </>
  );
};
