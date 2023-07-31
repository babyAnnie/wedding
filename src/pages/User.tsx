import { Button, Form, Input, message } from 'antd';
import '../pages.css'
import ledImg from '../assets/led.png'
import phonePng from '../assets/phone.png'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const onFinishFailed = (errorInfo: any) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
  const errorFields = errorInfo?.errorFields ?? [];
  if (Array.isArray(errorFields)) {
    errorFields.forEach(elem => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-argument
      void message.warning(elem?.errors ?? '');
    });
  }
};
function User() {
  const [form] = Form.useForm();
  const onFinish = async (values: any) => {
    const res = await fetch('http://159.75.180.131:9999/users/insert', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      mode: 'cors',
      cache: 'no-cache',
      body: JSON.stringify({
        ...values,
        "time": new Date().toLocaleDateString(),
      })
    })
    if (res?.ok) {
      void message.success('已提交成功');
      form.resetFields();
    } else {
      void message.error('提交失败了');
    }
  };

  return (
    <div className='wrapper user'>
      <div className='center imgsText animate__animated animate__bounceIn'>邀您见证</div>
      <div className='center animate__animated animate__zoomIn' style={{ flex: 1, }}>
        <Form
          form={form}
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: '90vw', }}
          initialValues={{ remember: true }}
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="您的姓名"
            name="name"
            rules={[{ required: true, message: '请输入您的姓名' }]}
          >
            <Input placeholder='请输入文本内容' />
          </Form.Item>

          <Form.Item
            label="您的电话"
            name="phone"
            rules={[{ required: true, message: '请输入您的号码' }]}
          >
            <Input placeholder='请输入正确的手机号码' />
          </Form.Item>

          <Form.Item
            label="赴宴人数"
            name="number_of_people"
          >
            <Input placeholder='请输入文本内容' />
          </Form.Item>

          <Form.Item
            label="祝福留言"
            name="blessing_msg"
          >
            <Input.TextArea autoSize={{ minRows: 3, maxRows: 6 }} />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              提交
            </Button>
          </Form.Item>
        </Form>
      </div>
      <div className='calls'>
        <div className='center' style={{ flex: 1, }}>
          <a className='center linkCall' style={{ width: 'auto', padding: 8, }}>
            <img className='animate__animated animate__swing' style={{ width: 18, height: 18 }} src={phonePng} alt="" />
            <span className='animate__animated animate__fadeIn'>&nbsp;联系新郎</span>
          </a>
        </div>
        <div className='center' style={{ flex: 1, }}>
          <a className='center linkCall' style={{ width: 'auto', padding: 8, }}>
            <img className='animate__animated animate__swing' style={{ width: 18, height: 18 }} src={phonePng} alt="" />
            <span className='animate__animated animate__fadeIn'>&nbsp;联系新娘</span>
          </a>
        </div>
      </div>
      <img className='ledImg' src={ledImg} alt="" />
      <div className='mapBlessBottom animate__animated animate__fadeInRight'>诚挚邀请您的莅临</div>
    </div>
  );
}

export default User;