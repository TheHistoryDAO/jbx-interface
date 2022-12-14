import { Trans } from '@lingui/macro'
import ExternalLink from 'components/ExternalLink'

import { trendingWindowDays } from 'constants/trendingWindowDays'

// Explains how trending projects rankings are calculated
export default function RankingExplanation() {
  const trendingRankingExplanationCodeURL =
    'https://github.com/TheHistoryDAO/jbx-interface/blob/main/src/hooks/Projects.ts#L144'
  return (
    <Trans>
      Rankings based on number of contributions and volume gained in the last{' '}
      {trendingWindowDays} days.{' '}
      <ExternalLink href={trendingRankingExplanationCodeURL}>
        See code
      </ExternalLink>
    </Trans>
  )
}
