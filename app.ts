let skills: string[] = ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'C#'];

skills = skills.filter(s => !s.startsWith('C'));
console.log("My skill list:")
for (const skill of skills) {
    console.log(skill.toUpperCase());
}

