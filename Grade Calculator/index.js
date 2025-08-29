const { createApp, ref, computed } = Vue;

createApp({
  setup() {
    const test1 = ref(0);
    const test2 = ref(0);
    const homeworks = ref([]);
    const project = ref(0);
    const finalExam = ref(0);

    const addHomework = () => {
      homeworks.value.push(0);
    };

    const calculatedGrade = computed(() => {
      let grade = 0;
      grade += (test1.value * 0.10);
      grade += (test2.value * 0.10);
      grade += (project.value * 0.25);
      grade += (finalExam.value * 0.25);
      homeworks.value.forEach(hw => {
        grade += (hw * 0.05);
      });
      return grade;
    });

    const letterGrade = computed(() => {
      const g = calculatedGrade.value;
      if (g >= 90) return "A";
      if (g >= 80) return "B";
      if (g >= 70) return "C";
      if (g >= 60) return "D";
      return "F";
    });

    return {
      test1,
      test2,
      homeworks,
      project,
      finalExam,
      addHomework,
      calculatedGrade,
      letterGrade
    };
  }
}).mount("#app");