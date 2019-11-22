<template>
  <div class="dashboard-container">
    <div class="app-container">
      <!--制作基础题库搜索表单-->
      <el-row>
        <el-col :span="6">
          学科：
          <el-select v-model="searchForm.subjectID" placeholder="请选择学科">
            <el-option 
              v-for="item in subjectIDList" 
              :key="item.value"
              :label="item.label"
              :value="item.value"
              ></el-option>
          </el-select>
        </el-col>
        <el-col :span="6">
          难度：
          <el-select v-model="searchForm.difficulty" placeholder="请选择难度">
            <el-option 
              v-for="item in difficultyList"
              :key="item.value"
              :label="item.label"
              :value="item.value"
              ></el-option>
          </el-select>
        </el-col>
        <el-col :span="6">
          试题类型：
          <el-select v-model="searchForm.questionType" placeholder="请选择试题类型" style="width:160px;">
            <el-option 
              v-for="item in questionTypeList"
              :key="item.value"
              :label="item.label"
              :value="item.value"
              ></el-option>
          </el-select>
        </el-col>
        <el-col :span="6"></el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
// 引入各个api接口，本质就是许多方法，方法内部有封装axios
// 导入学科api
import {simple} from '@/api/hmmm/subjects.js'
// 导入constants常量成员
// import {difficulty} from '@/api/hmmm/constants.js'
import {
  difficulty as difficultyList, 
  questionType as questionTypeList
} 
  from '@/api/hmmm/constants.js'

export default {
  /**
   * subjectID	否 学科
   * difficulty	否 难度
   * questionType	否 试题类型
   */
  name: 'QuestionsList',
  data() {
    return {
      subjectIDList: [], // 供选取的学科列表信息
      // difficultyList: difficulty,
      // 对象简易成员赋值(es6)[难度、题型]
      difficultyList,
      questionTypeList,
      // 搜索表单对象
      searchForm: {
        subjectID: '',
        difficulty: '',
        questionType: ''
      }
    }
  },
  created() {
    this.getSubjectIDList()
  },
  methods: {
    // 获得学科列表信息
    async getSubjectIDList() {
      var rst = await simple()
      // data接收获得的学科数据
      this.subjectIDList = rst.data
    }
  }
}
</script>

<style scoped>
</style>
