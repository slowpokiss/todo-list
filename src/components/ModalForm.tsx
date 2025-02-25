import { useState } from 'react';
import { Modal, Button, Form, Input, ConfigProvider } from 'antd';
import { PlusOutlined } from '@ant-design/icons'; 
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux-toolkit/mainSlice';

export default function ModalForm() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleSubmit = (values: { inputField: string }) => {
    dispatch(addTodo(values.inputField));
    setIsModalOpen(false);
  };

  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            colorPrimary: '#af40ff',
            colorPrimaryHover: '#9f35e6',
            colorPrimaryActive: '#7f1ad1',
            colorText: '#ffffff',
            colorBgTextHover: '#9f35e6',
            borderRadius: 4,
          },
        },
      }}
    >
      <div className='w-fit ml-auto mb-3'>
        <Button
          type="primary"
          shape="circle"
          icon={<PlusOutlined />}
          onClick={handleOpenModal}
        />
        
        <Modal
          title="Добавить TODO"
          open={isModalOpen}
          onCancel={handleCloseModal}
          footer={null}
        >
          <Form onFinish={handleSubmit}>
            <Form.Item
              name="inputField"
              label="Введите текст TODO"
              rules={[{ required: true, message: 'Введите текст TODO' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Отправить
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </ConfigProvider>
  );
}
