import { Descriptions } from 'antd';
import { Convert } from 'utils/ConvertData';
import PropTypes from 'prop-types';

DescriptUser.propTypes = {
  user: PropTypes.object.isRequired,
  allAccount: PropTypes.object.isRequired,
  userSetting: PropTypes.array.isRequired,
};

export default function DescriptUser({ user, allAccount, userSetting }) {
  return (
    <Descriptions title="사용자 정보" bordered>
      <Descriptions.Item label="이름">
        <div className="flex flex-row">
          {!user.photo ? null : <img width={20} height={20} src={user.photo} />}
          <div>{user.name}</div>
        </div>
      </Descriptions.Item>
      <Descriptions.Item label="보유중인 계좌수" span={2}>
        {Convert.accountData(allAccount.data, user.id).length}
      </Descriptions.Item>
      <Descriptions.Item label="성별">
        {Convert.gender(user.gender_origin)}
      </Descriptions.Item>
      <Descriptions.Item label="이메일" span={2}>
        {user.email}
      </Descriptions.Item>
      <Descriptions.Item label="휴대폰번호">
        {user.phone_number}
      </Descriptions.Item>
      <Descriptions.Item label="주소" span={2}>
        {Convert.address(user.address, user.detail_address)}
      </Descriptions.Item>
      <Descriptions.Item label="생년월일">
        {!user.birth_date ? null : Convert.date(user.birth_date)}
      </Descriptions.Item>
      <Descriptions.Item label="최근로그인">
        {Convert.date(user.last_login)}
      </Descriptions.Item>
      <Descriptions.Item label="가입일">
        {Convert.date(user.created_at)}
      </Descriptions.Item>
      <Descriptions.Item label="혜택수신">
        {Convert.allowMarketingPush(userSetting, user.uuid)}
      </Descriptions.Item>
      <Descriptions.Item label="활성화">
        {Convert.isActiveFromUserSetting(userSetting, user.uuid)}
      </Descriptions.Item>
    </Descriptions>
  );
}
