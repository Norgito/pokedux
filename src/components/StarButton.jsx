import { Button } from 'antd';
import { StarFilled, StarOutlined } from '@ant-design/icons';

const StarButton = ({ isFavorite, onClick }) => {
  const Icon = isFavorite ? StarFilled : StarOutlined;
  return <Button icon={<Icon />} onClick={onClick}
    className='left-32 top-1 bg-opacity-0 text-xl text-yellow-400 flex justify-center items-center bg-white border-0' />;
};

export default StarButton;