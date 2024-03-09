import { AppProvider } from './components/providers';
import { Button } from './components/ui';
import { WebcamCapture } from './components';

const App = () => {
  return (
    <AppProvider>
      <section className="flex items-center justify-center mt-4">
        <div className="flex flex-col gap-4 w-[600px]">
          <div className="text-lg text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem asperiores libero saepe laudantium eos repellat,
            quasi enim. Commodi iste laborum, porro aperiam officiis labore
            natus eius recusandae reprehenderit voluptatum dolores?
          </div>
          <Button variant="default" size="lg" className="text-lg">
            Bebra
          </Button>
        </div>
      </section>
      <WebcamCapture />
    </AppProvider>
  );
};

export default App;
