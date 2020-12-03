//根据下拉框的vlue 获取下拉框的label
export function getSelectOption(value,selectData) {

  let label

  for (let select of selectData) {

    if (select.value === value) {
      label = select.label
    }
  }

  return {
    value: value,
    label: label
  }
}
