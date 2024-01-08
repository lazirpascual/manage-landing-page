import ManageMain from './components/ManageMain';
import ManageDescription from './components/ManageDescription';
import Carousel from './components/Carousel';
import ManageCTA from './components/ManageCTA';

export default function MainBody() {
  return (
    <>
      <main>
        <ManageMain />
        <ManageDescription />
        <Carousel />
        <ManageCTA />
      </main>
    </>
  );
}
