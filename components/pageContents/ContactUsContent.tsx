"use client";
import { useNavbarStore } from "@/lib/store";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Textarea,
  useDisclosure,
} from "@nextui-org/react";
import { useEffect, useState } from "react";

type Props = {
  data: any;
};

export function ContactUsContent({ data }: Props) {
  const { setActiveItem } = useNavbarStore();
  useEffect(() => {
    setActiveItem(data?.slug.current);
  }, [setActiveItem, data?.slug]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isFormValid, setIsFormValid] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const validate = () => {
    const newErrors = {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    };
    if (!formData.name) newErrors.name = "İsim gerekli";
    if (!formData.email) newErrors.email = "Email gerekli";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Geçersiz email";
    if (!formData.phone) newErrors.phone = "Telefon gerekli";
    else if (!/^\d{10,11}$/.test(formData.phone))
      newErrors.phone =
        "Telefon 10 veya 11 haneli olmalıdır ve sadece rakamlardan oluşmalıdır";
    if (!formData.subject) newErrors.subject = "Konu gerekli";
    setErrors(newErrors);
    return Object.values(newErrors).every((error) => error === "");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setIsFormValid(validate());
  };

  const handleBlur = () => {
    setIsFormValid(validate());
  };

  const send = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    if (validate()) {
      await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      setIsSubmitted(true);
      onOpen();
    }
  };

  return (
    <>
      <div className="container max-w-5xl px-4 m-auto my-16">
        <div className="mb-16">
          <h1 className="text-4xl font-bold text-center mb-4">{data?.title}</h1>
          <p className="text-center">{data?.paragraph}</p>
        </div>
        <div className="flex">
          <form className="flex flex-1 flex-col gap-4" onSubmit={send}>
            <Input
              type="text"
              variant="bordered"
              label="İsim"
              name="name"
              isInvalid={!!errors.name}
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
              errorMessage={errors.name}
              required
            />
            <Input
              type="email"
              variant="bordered"
              label="Email"
              name="email"
              isInvalid={!!errors.email}
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              errorMessage={errors.email}
              required
            />
            <Input
              type="text"
              variant="bordered"
              label="Telefon"
              name="phone"
              isInvalid={!!errors.phone}
              value={formData.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              errorMessage={errors.phone}
              required
            />
            <Input
              type="text"
              variant="bordered"
              label="Konu"
              name="subject"
              isInvalid={!!errors.subject}
              value={formData.subject}
              onChange={handleChange}
              onBlur={handleBlur}
              errorMessage={errors.subject}
              required
            />
            <Textarea
              label="Mesaj"
              placeholder="Mesajınızı buraya yazınız..."
              variant="bordered"
              name="message"
              isInvalid={!!errors.message}
              value={formData.message}
              onChange={handleChange}
              onBlur={handleBlur}
              errorMessage={errors.message}
              className="w-full"
            />
            <Button color="secondary" className="text-white" type="submit" disabled={!isFormValid}>
              Gönder
            </Button>
          </form>
        </div>
      </div>
      <Modal
        closeButton
        aria-labelledby="modal-title"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Teşekkürler!</ModalHeader>
              <ModalBody>
                <p>
                  Mesajınız gönderildi. En kısa sürede size geri dönüş yapılacaktır.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="success" onPress={onClose}>
                  Oley!
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
