import React from 'react';
import { Layout, Modal } from 'components';
import { Hero, SuccessSub } from 'modules';
import { SubscriptionForm } from 'modules/forms';
import { http } from 'api/http';

const MODAL_TYPES = {
  FORM: 'form',
  SUCCESS: 'success',
};

const Subscription: React.FC = () => {
  const [modal, setModal] = React.useState<string | null>(null);
  const showFormModal = () => setModal(MODAL_TYPES.FORM);
  const showSuccessModal = () => setModal(MODAL_TYPES.SUCCESS);
  const closeModal = () => setModal(null);
  const handleSubmit = async (data: { name: string; email: string }) => await http.subscribe(data);
  const getModalComponent = React.useCallback(() => {
    switch (modal) {
      case MODAL_TYPES.FORM:
        return {
          title: 'Subscription form',
          component: <SubscriptionForm onSuccess={showSuccessModal} onSubmit={handleSubmit} />,
        };
      case MODAL_TYPES.SUCCESS:
        return {
          title: 'All done!',
          component: <SuccessSub onClick={closeModal} />,
        };
      default:
        return null;
    }
  }, [modal]);

  const modalContent = getModalComponent();
  return (
    <Layout>
      {modal && (
        <Modal title={modalContent?.title} onClose={closeModal}>
          {modalContent?.component}
        </Modal>
      )}

      <Hero
        title="A better way to enjoy every day."
        desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        buttonText="Request an invite"
        onClick={showFormModal}
      />
    </Layout>
  );
};

export default Subscription;
