import { Input } from 'antd'

export default field => {
  const fieldProps = field.props
  const itemProps = {
    autoComplete: field.name
  }
  if (fieldProps.placeholder) {
    itemProps.placeholder = fieldProps.placeholder
  }
  return <Input {...itemProps} />
}
