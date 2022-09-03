import type { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';

const profileHandler: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  switch (req.method) {
    case 'POST' || 'post':
      res.status(200).json({ messages: 'Successfull Added Profile!' });
      break;
    case 'PUT' || 'put':
      res.status(200).json({ messages: 'Successfull Update Profile!' });
      break;
    case 'GET' || 'get':
      res.status(200).json({
        id: '1a',
        avatar:
          'https://media-exp1.licdn.com/dms/image/C5103AQGK3tKgTL_MOw/profile-displayphoto-shrink_200_200/0/1533869608104?e=1666828800&v=beta&t=unwVfRnIfJ_2uHYPP6g8AUehs9pN5Zme9iRp9Fq4ZK8',
        firstName: 'John',
        lastName: 'Doe',
        headline: 'Sr. Frontend Developer at Google',
        age: 25,
        about:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit.',
        experiences: [
          {
            id: '1b',
            title: 'Sr. Frontend Developer',
            companyName: 'Google',
            logo: '',
            location: 'Yogyakarta Area, Yogyakarta, Indonesia',
            description:
              'Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Quos Blanditiis Tenetur Unde Suscipit, Quam Beatae Rerum Inventore Consectetur, Neque Doloribus, Cupiditate Numquam Dignissimos Laborum Fugiat Deleniti? Eum Quasi Quidem Quibusdam.',
            startDate: '2019-09-02T23:50:51+07:00',
            endDate: '2023-12-02T23:50:51+07:00',
          },
          {
            id: '2b',
            title: 'Frontend Developer',
            companyName: 'Facebook',
            logo: '',
            location: 'Yogyakarta Area, Yogyakarta, Indonesia',
            description:
              'Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Quos Blanditiis Tenetur Unde Suscipit, Quam Beatae Rerum Inventore Consectetur, Neque Doloribus, Cupiditate Numquam Dignissimos Laborum Fugiat Deleniti? Eum Quasi Quidem Quibusdam.',
            startDate: '2019-09-02T23:50:51+07:00',
            endDate: '2023-12-02T23:50:51+07:00',
          },
          {
            id: '3b',
            title: 'Frontend Developer',
            companyName: 'Facebook',
            logo: '',
            location: 'Yogyakarta Area, Yogyakarta, Indonesia',
            description:
              'Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Quos Blanditiis Tenetur Unde Suscipit, Quam Beatae Rerum Inventore Consectetur, Neque Doloribus, Cupiditate Numquam Dignissimos Laborum Fugiat Deleniti? Eum Quasi Quidem Quibusdam.',
            startDate: '2019-09-02T23:50:51+07:00',
            endDate: '2023-12-02T23:50:51+07:00',
          },
          {
            id: '4b',
            title: 'Frontend Developer',
            companyName: 'Facebook',
            logo: '',
            location: 'Yogyakarta Area, Yogyakarta, Indonesia',
            description:
              'Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Quos Blanditiis Tenetur Unde Suscipit, Quam Beatae Rerum Inventore Consectetur, Neque Doloribus, Cupiditate Numquam Dignissimos Laborum Fugiat Deleniti? Eum Quasi Quidem Quibusdam.',
            startDate: '2019-09-02T23:50:51+07:00',
            endDate: '2023-12-02T23:50:51+07:00',
          },
          {
            id: '5b',
            title: 'Frontend Developer',
            companyName: 'Facebook',
            logo: '',
            location: 'Yogyakarta Area, Yogyakarta, Indonesia',
            description:
              'Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Quos Blanditiis Tenetur Unde Suscipit, Quam Beatae Rerum Inventore Consectetur, Neque Doloribus, Cupiditate Numquam Dignissimos Laborum Fugiat Deleniti? Eum Quasi Quidem Quibusdam.',
            startDate: '2019-09-02T23:50:51+07:00',
            endDate: '2023-12-02T23:50:51+07:00',
          },
          {
            id: '6b',
            title: 'Frontend Developer',
            companyName: 'Facebook',
            logo: '',
            location: 'Yogyakarta Area, Yogyakarta, Indonesia',
            description:
              'Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Quos Blanditiis Tenetur Unde Suscipit, Quam Beatae Rerum Inventore Consectetur, Neque Doloribus, Cupiditate Numquam Dignissimos Laborum Fugiat Deleniti? Eum Quasi Quidem Quibusdam.',
            startDate: '2019-09-02T23:50:51+07:00',
            endDate: '2023-12-02T23:50:51+07:00',
          },
          {
            id: '7b',
            title: 'Frontend Developer',
            companyName: 'Facebook',
            logo: '',
            location: 'Yogyakarta Area, Yogyakarta, Indonesia',
            description:
              'Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Quos Blanditiis Tenetur Unde Suscipit, Quam Beatae Rerum Inventore Consectetur, Neque Doloribus, Cupiditate Numquam Dignissimos Laborum Fugiat Deleniti? Eum Quasi Quidem Quibusdam.',
            startDate: '2019-09-02T23:50:51+07:00',
            endDate: '2023-12-02T23:50:51+07:00',
          },
          {
            id: '8b',
            title: 'Frontend Developer',
            companyName: 'Facebook',
            logo: '',
            location: 'Yogyakarta Area, Yogyakarta, Indonesia',
            description:
              'Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Quos Blanditiis Tenetur Unde Suscipit, Quam Beatae Rerum Inventore Consectetur, Neque Doloribus, Cupiditate Numquam Dignissimos Laborum Fugiat Deleniti? Eum Quasi Quidem Quibusdam.',
            startDate: '2019-09-02T23:50:51+07:00',
            endDate: '2023-12-02T23:50:51+07:00',
          },
        ],
        educations: [
          {
            id: '1c',
            schoolName: 'Boston university',
            degree: 'Bachelor',
            fieldOfStudy: 'Computer science',
            startDate: '2019-09-02T23:50:51+07:00',
            endDate: '2023-12-02T23:50:51+07:00',
          },
        ],
        skills: [
          { title: 'HTML' },
          { title: 'CSS' },
          { title: 'Javascript' },
          { title: 'React' },
          { title: 'Redux' },
          { title: 'Next.js' },
          { title: 'Vue.js' },
          { title: 'Angular' },
          { title: 'Node.js' },
          { title: 'Mongodb' },
        ],
        languages: [
          {
            id: '1d',
            language: 'Indonesian',
            proficiency: 'Native or bilingual proficiency',
          },
          {
            id: '2d',
            language: 'English',
            proficiency: 'Native or bilingual proficiency',
          },
        ],
        organizations: [
          // {
          //   id: '1e',
          //   organizationName: 'hahah',
          //   position: 'CEO',
          //   startDate: '',
          //   endDate: '',
          // },
        ],
      });
      break;
  }
};

export default profileHandler;
