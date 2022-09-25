import { Descriptions } from 'antd';
import { Convert } from 'utils/ConvertData';
import PropTypes from 'prop-types';

DescriptAccount.propTypes = {
  account: PropTypes.object.isRequired,
  allUser: PropTypes.object.isRequired,
};

export default function DescriptAccount({ account, allUser }) {
  return (
    <Descriptions title="계좌 정보" bordered className="mt-4">
      <Descriptions.Item label="계좌명" span={1.5}>
        {account.name}
      </Descriptions.Item>
      <Descriptions.Item label="브로커명" span={1.5}>
        {Convert.broker(account.broker_id)}
      </Descriptions.Item>
      <Descriptions.Item label="고객명">
        {Convert.owner(allUser.data, account.user_id)}
      </Descriptions.Item>
      <Descriptions.Item label="계좌번호">
        {Convert.accountFormat(+account.broker_id, account.number)}
      </Descriptions.Item>
      <Descriptions.Item label="계좌활성화여부">
        {account.is_active ? '활성화' : '비활성화'}
      </Descriptions.Item>
      <Descriptions.Item label="평가금액">
        {Convert.assets(account.assets, account.payments)}
      </Descriptions.Item>
      <Descriptions.Item label="입금금액">
        {Math.round(account.payments).toLocaleString()}
      </Descriptions.Item>
      <Descriptions.Item label="계좌개설일">
        {Convert.date(account.created_at)}
      </Descriptions.Item>
      <Descriptions.Item label="계좌상태">
        {Convert.valueToKey(account.status)}
      </Descriptions.Item>
    </Descriptions>
  );
}
