import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';

const Content = styled.div`
  width: 300px;
  height: 300px;
  overflow: hidden;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;

export default function MyGallery(props) {
  console.log('props', props);
  const { data_galery } = props.item;
  console.log('items', data_galery);

  return (
    <Content>
      <div>
        <Image alt={'#hello'} src={`data:image/jpeg;base64,${data_galery}`} />
      </div>
    </Content>
  );
}
