import { useGetAllData } from 'hooks';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { allUserState } from 'recoil/user';
import { Masking, Convert } from 'utils/ConvertData';
import brokers from '../local_json/brokers';

const BROKERS = Object.values(brokers);
export default function ACCOUNT_TABLE_COLUMNS() {
  const [allUser] = useRecoilState(allUserState);
  useGetAllData();

  if (allUser.data === []) return [];
  return [
    {
      title: '계좌번호',
      dataIndex: 'number',
      render: (number) => (
        <Link to={`/accounts?number=${number}`}>{Masking.text(number)}</Link>
      ),
      width: 120,
      fixed: 'left',
      align: 'center',
    },
    {
      title: '고객명',
      dataIndex: 'user_id',
      render: (user_id) => {
        return (
          <Link to={`/users/${user_id}`}>
            {Masking.text(Convert.owner(allUser.data, user_id))}
          </Link>
        );
      },
      width: 120,
      fixed: 'left',
      align: 'center',
    },
    {
      title: '계좌명',
      dataIndex: 'name',
      align: 'center',
    },
    {
      title: '브로커명',
      dataIndex: 'broker_id',
      render: (broker_id) => <span>{Convert.broker(broker_id)}</span>,
      align: 'center',
      filters: BROKERS.map((broker) => {
        return { text: broker, value: broker };
      }),
      onFilter: (value, record) => Convert.broker(record.broker_id) === value,
    },
    {
      title: '계좌상태',
      dataIndex: 'status',
      render: (status) => <span>{Convert.valueToKey(status)}</span>,
      align: 'center',
      filters: [
        { text: '운용중', value: '운용중' },
        { text: '입금대기', value: '입금대기' },
        { text: '투자중지', value: '투자중지' },
        { text: '해지', value: '해지' },
        { text: '관리자확인필요', value: '관리자확인필요' },
      ],
      onFilter: (value, record) => Convert.valueToKey(record.status) === value,
    },
    {
      title: '평가금액',
      dataIndex: ['assets', 'payments'],
      render: (text, row) => Convert.assets(row.assets, row.payments),
      align: 'center',
    },
    {
      title: '입금금액',
      dataIndex: 'payments',
      render: (payment) => <span>{Math.round(payment).toLocaleString()}</span>,
      align: 'center',
    },
    {
      title: '계좌활성화여부',
      dataIndex: 'is_active',
      render: (is_active) => <span>{is_active ? '활성화' : '비활성화'}</span>,
      align: 'center',
      filters: [
        { text: '활성화', value: true },
        { text: '비활성화', value: false },
      ],
      onFilter: (value, record) => record.is_active === value,
    },
    {
      title: '계좌개설일',
      dataIndex: 'created_at',
      render: (date) => <span>{Convert.date(date)}</span>,
      align: 'center',
    },
  ];
}
