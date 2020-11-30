import SnInput from "@/components/common/input/SnInput";
import SnSelect from "@/components/common/select/SnSelect";
import SnCardNoTitle from "@/components/common/card/SnCardNoTitle";
import SnCardWithTitle from "@/components/common/card/SnCardWithTitle";
import SnMustText from "@/components/common/text/SnMustText";
import SnPage from "@/components/common/page/SnPage";
import SnDatePicker from "@/components/common/date_choose/SnDatePicker";
import SnDatePickerWithRound from "@/components/common/date_choose/SnDatePickerWithRound";
import SnInputComplex from "@/components/common/input/SnInputComplex";
import SnInputWithAdvice from "@/components/common/input/SnInputWithAdvice";
import SnRowHasFourCol from "@/components/common/layout/row/SnRowHasFourCol";
import SnRowHasTwoCol from "@/components/common/layout/row/SnRowHasTwoCol";
import SnSearchInput from "@/components/common/input/SnSearchInput";
import SnSelectCreateItem from "@/components/common/select/SnSelectCreateItem";
import SnSelectHasSelect from "@/components/common/select/SnSelectHasSelect";
import SnTable from "@/components/common/table/SnTable";
import SnTableHasCheckbox from "@/components/common/table/SnTableHasCheckbox";
import SnTableHasSelect from "@/components/common/table/SnTableHasSelect";
import SnText from "@/components/common/text/SnText";
import SnThreeColSpace from "@/components/common/layout/SnThreeColSpace";
import SnTitle from "@/components/common/text/SnTitle";
import SnDownHasTabs from "@/components/common/tabs/SnDownHasTabs";
import SnImageInCircle from "@/components/common/avatar/SnImageInCircle";

export default {
  install(Vue) {
    Vue.component('SnImageInCircle',SnImageInCircle)
    Vue.component('SnDownHasTabs', SnDownHasTabs)
    Vue.component('SnInput', SnInput)
    Vue.component('SnCardNoTitle', SnCardNoTitle)
    Vue.component('SnCardWithTitle', SnCardWithTitle)
    Vue.component('SnMustText', SnMustText)
    Vue.component('SnPage', SnPage)
    Vue.component('SnSelect', SnSelect)
    Vue.component('SnDatePicker', SnDatePicker)
    Vue.component('SnDatePickerWithRound', SnDatePickerWithRound)
    Vue.component('SnInputComplex', SnInputComplex)
    Vue.component('SnInputWithAdvice', SnInputWithAdvice)
    Vue.component('SnRowHasFourCol', SnRowHasFourCol)
    Vue.component('SnRowHasTwoCol', SnRowHasTwoCol)
    Vue.component('SnSearchInput', SnSearchInput)
    Vue.component('SnSelectCreateItem', SnSelectCreateItem)
    Vue.component('SnSelectHasSelect', SnSelectHasSelect)
    Vue.component('SnTable', SnTable)
    Vue.component('SnTableHasCheckbox', SnTableHasCheckbox)
    Vue.component('SnTableHasSelect', SnTableHasSelect)
    Vue.component('SnText', SnText)
    Vue.component('SnThreeColSpace', SnThreeColSpace)
    Vue.component('SnTitle', SnTitle)
  }
}

