//根据下拉框的vlue 获取下拉框的label
export function getSelectOption(value, selectData) {

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

//判断当前路由是否与传入的路由相同
export function judgeRouter(currentComponent, path) {

  return currentComponent.$route.path === path
}