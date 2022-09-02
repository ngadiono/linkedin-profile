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
            startDate: '',
            endDate: '',
          },
          {
            id: '2b',
            title: 'Frontend Developer',
            companyName: 'Facebook',
            logo: '',
            location: 'Yogyakarta Area, Yogyakarta, Indonesia',
            description:
              'Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Quos Blanditiis Tenetur Unde Suscipit, Quam Beatae Rerum Inventore Consectetur, Neque Doloribus, Cupiditate Numquam Dignissimos Laborum Fugiat Deleniti? Eum Quasi Quidem Quibusdam.',
            startDate: '',
            endDate: '',
          },
          {
            id: '3b',
            title: 'Frontend Developer',
            companyName: 'Facebook',
            logo: '',
            location: 'Yogyakarta Area, Yogyakarta, Indonesia',
            description:
              'Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Quos Blanditiis Tenetur Unde Suscipit, Quam Beatae Rerum Inventore Consectetur, Neque Doloribus, Cupiditate Numquam Dignissimos Laborum Fugiat Deleniti? Eum Quasi Quidem Quibusdam.',
            startDate: '',
            endDate: '',
          },
          {
            id: '4b',
            title: 'Frontend Developer',
            companyName: 'Facebook',
            logo: '',
            location: 'Yogyakarta Area, Yogyakarta, Indonesia',
            description:
              'Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Quos Blanditiis Tenetur Unde Suscipit, Quam Beatae Rerum Inventore Consectetur, Neque Doloribus, Cupiditate Numquam Dignissimos Laborum Fugiat Deleniti? Eum Quasi Quidem Quibusdam.',
            startDate: '',
            endDate: '',
          },
          {
            id: '5b',
            title: 'Frontend Developer',
            companyName: 'Facebook',
            logo: '',
            location: 'Yogyakarta Area, Yogyakarta, Indonesia',
            description:
              'Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Quos Blanditiis Tenetur Unde Suscipit, Quam Beatae Rerum Inventore Consectetur, Neque Doloribus, Cupiditate Numquam Dignissimos Laborum Fugiat Deleniti? Eum Quasi Quidem Quibusdam.',
            startDate: '',
            endDate: '',
          },
          {
            id: '6b',
            title: 'Frontend Developer',
            companyName: 'Facebook',
            logo: '',
            location: 'Yogyakarta Area, Yogyakarta, Indonesia',
            description:
              'Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Quos Blanditiis Tenetur Unde Suscipit, Quam Beatae Rerum Inventore Consectetur, Neque Doloribus, Cupiditate Numquam Dignissimos Laborum Fugiat Deleniti? Eum Quasi Quidem Quibusdam.',
            startDate: '',
            endDate: '',
          },
          {
            id: '7b',
            title: 'Frontend Developer',
            companyName: 'Facebook',
            logo: '',
            location: 'Yogyakarta Area, Yogyakarta, Indonesia',
            description:
              'Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Quos Blanditiis Tenetur Unde Suscipit, Quam Beatae Rerum Inventore Consectetur, Neque Doloribus, Cupiditate Numquam Dignissimos Laborum Fugiat Deleniti? Eum Quasi Quidem Quibusdam.',
            startDate: '',
            endDate: '',
          },
          {
            id: '8b',
            title: 'Frontend Developer',
            companyName: 'Facebook',
            logo: '',
            location: 'Yogyakarta Area, Yogyakarta, Indonesia',
            description:
              'Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Quos Blanditiis Tenetur Unde Suscipit, Quam Beatae Rerum Inventore Consectetur, Neque Doloribus, Cupiditate Numquam Dignissimos Laborum Fugiat Deleniti? Eum Quasi Quidem Quibusdam.',
            startDate: '',
            endDate: '',
          },
        ],
        educations: [
          {
            id: '1c',
            title: 'Frontend Developer',
            companyName: 'Facebook',
            logo: '',
          },
        ],
        skills: ['HTML', 'CSS', 'Javascript', 'React', 'Redux', 'Next.js', 'Vue.js', 'Angular', 'Node.js'],
        languages: [
          {
            id: '1d',
            language: 'yayaya',
            proficiency: 'hahaha',
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
