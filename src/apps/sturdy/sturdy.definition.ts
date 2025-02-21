import { Register } from '~app-toolkit/decorators';
import { appDefinition, AppDefinition } from '~app/app.definition';
import { AppAction, AppTag, GroupType } from '~app/app.interface';
import { Network } from '~types/network.interface';

export const STURDY_DEFINITION = appDefinition({
  id: 'sturdy',
  name: 'Sturdy',
  description: 'Sturdy is the first DeFi lending protocol with interest-free borrowing and high yield lending',
  url: 'https://app.sturdy.finance/',

  groups: {
    supply: {
      id: 'supply',
      type: GroupType.TOKEN,
      label: 'Lending',
    },

    stableDebt: {
      id: 'stable-debt',
      type: GroupType.TOKEN,
      label: 'Lending',
    },

    variableDebt: {
      id: 'variable-debt',
      type: GroupType.TOKEN,
      label: 'Lending',
    },
  },
  presentationConfig: {
    tabs: [
      {
        label: 'Lending',
        viewType: 'split',
        views: [
          {
            viewType: 'list',
            label: 'Supply',
            groupIds: ['supply'],
          },
          {
            viewType: 'split',
            label: 'Borrow',
            views: [
              {
                viewType: 'list',
                label: 'Variable',
                groupIds: ['variable-debt'],
              },
              {
                viewType: 'list',
                label: 'Stable',
                groupIds: ['stable-debt'],
              },
            ],
          },
        ],
      },
    ],
  },
  tags: [AppTag.LENDING],

  links: {
    github: 'https://github.com/sturdyfi',
    twitter: 'https://twitter.com/SturdyFinance',
    discord: 'https://discord.com/invite/tRVHp6Vx5N',
  },

  supportedNetworks: {
    [Network.ETHEREUM_MAINNET]: [AppAction.VIEW],
    [Network.FANTOM_OPERA_MAINNET]: [AppAction.VIEW],
  },

  primaryColor: '#fff',
});

@Register.AppDefinition(STURDY_DEFINITION.id)
export class SturdyAppDefinition extends AppDefinition {
  constructor() {
    super(STURDY_DEFINITION);
  }
}

export default STURDY_DEFINITION;
