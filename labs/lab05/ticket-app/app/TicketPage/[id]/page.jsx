import TicketForm from "@/app/(components)/TicketForm";

const TicketPage = ({ params }) => {
  return <TicketForm ticket={{ _id: params.id }} />;
};

export default TicketPage;
