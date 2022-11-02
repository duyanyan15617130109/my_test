// 用于构造枚举字段的管理者对象
// name是http传输时枚举值的字段名，根据需要可以不要
function getEnumManager (name, enums) {
    const labels = enums.map((item) => item.label);
    const values = enums.map((item) => item.value);
    return {
      name,
      labels,
      values,
      enums,
      getValueByLabel (label) {
        return values[labels.indexOf(label)];
      },
      getLabelByValue (value) {
        return labels[values.indexOf(value)];
      },
      getItemByValueOrLabel (valueOrLabel) {
        debugger
        let index = values.indexOf(valueOrLabel);
        if (index < 0) {
          index = labels.indexOf((valueOrLabel));
        }
        return enums[index];
      },
    }
  }
  
  export const orderStatusEnum = getEnumManager('orderStatus', [
    { value: 0, label: '已完成', operation: ['checkDetail', 'download'] },
    { value: 1, label: '待支付', operation: ['pay', 'cancel'] },
    { value: 2, label: '已取消', operation: ['checkDetail'] }]);