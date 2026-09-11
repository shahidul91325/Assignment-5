export interface ISkill {
  id: string;
  name: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'Programming' | 'Full Stack' | 'DevOps';
  description: string;
  icon: string;
  rating: number;
  difficulty: 'Beginner-Friendly' | 'Intermediate' | 'Advanced';
  badge: string;
  badgeColor: string;
}
