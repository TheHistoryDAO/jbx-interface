import { t, Trans } from '@lingui/macro'
import { Modal } from 'antd'
import ExternalLink from 'components/ExternalLink'

export default function PayWarningModal({
  open,
  onOk,
  onCancel,
}: {
  open: boolean
  onOk: VoidFunction
  onCancel: VoidFunction
}) {
  return (
    <Modal
      open={open}
      onOk={onOk}
      onCancel={onCancel}
      okText={t`I understand`}
      cancelButtonProps={{ hidden: true }}
      width={400}
    >
      <h2>
        <Trans>Heads up</Trans>
      </h2>
      <p className="font-medium">
        <Trans>
          The{' '}
          <ExternalLink href="https://github.com/TheHistoryDAO/jbx-contracts-v3">
            Juicebox contracts
          </ExternalLink>{' '}
          deployed by HistoryDAO may be vulnerable to bugs or hacks. All funds
          moved through Juicebox could be lost or stolen. HistoryDAO and
          JuiceboxDAO and Peel not liable for any losses by projects or their
          supporters.
        </Trans>
      </p>
    </Modal>
  )
}
