import styled from "styled-components";
import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
import { BiPlusCircle, BiMinusCircle } from "react-icons/bi";

const Wrapper = styled.div`
  margin-top: 1rem;
  width: 100%;
  max-width: 700px;
  .szh-accordion {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 1rem;
  }
`;

const ItemWithChevron = ({ header, ...rest }) => (
  <Item
    {...rest}
    header={
      <>
        {header}
        <div className="icons">
          <BiPlusCircle className="inactive" />
          <BiMinusCircle className="active" />
        </div>
      </>
    }
  />
);

const AccordionItem = styled(ItemWithChevron)`
  border: 1px solid #fffcf833;
  border-radius: 2rem;
  padding: 0.5rem 1rem;
  margin: 1rem 0;
  background: #1f004724;
  width: 100%;
  .szh-accordion__item {
    &-btn {
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      margin: 0;
      padding: 1rem;
      font-size: 1rem;
      font-weight: 400;
      text-align: left;
      color: #fff;
      background-color: transparent;
      border: none;
      &:hover {
        background: #22034b12;
      }
    }

    &-content {
      transition: height 0.25s cubic-bezier(0, 0, 0, 1);
    }

    &-panel {
      padding: 1rem;
    }
  }

  .inactive {
    margin-left: auto;
    transition: transform 0.25s cubic-bezier(0, 0, 0, 1);
  }
  .active {
    display: none;
    text-align: right;
  }

  &.szh-accordion__item--expanded {
    .szh-accordion__item-btn {
    }
    .inactive {
      display: none;
    }
    .active {
      display: block;
    }
  }
`;

export default function FAQ() {
  return (
    <Wrapper data-aos="zoom-in-up">
      {/* `transitionTimeout` prop should be equal to the transition duration in CSS */}
      <Accordion transition transitionTimeout={250}>
        <AccordionItem header="What is Collat.Finance?" initialEntered>
          Collat.Finance is a pioneering digital platform that integrates
          blockchain technology to offer digital pawn loans, item sales, and
          asset tokenization, enabling users to easily access financial services
          without a physical visit.
        </AccordionItem>

        <AccordionItem header="How do I apply for a loan with Collat.Finance?">
          Simply submit your item details through our platform. Our AI
          technology will assess your item's value, and you'll receive a loan
          offer based on this appraisal. Accept the offer, and your asset will
          be tokenized as collateral for the loan.
        </AccordionItem>

        <AccordionItem header="What types of items can I use as collateral for a loan?">
          Collat Finance accepts a wide range of valuable assets as collateral.
          This includes but is not limited to jewelry, electronics,
          collectibles, and more. If you're unsure about your item's
          eligibility, please contact our support team.
        </AccordionItem>

        <AccordionItem header="How quickly can I receive funds after accepting a loan offer?">
          Once the offer is accepted and your asset is tokenized, the loan
          amount is typically disbursed to your account within a few hours,
          making it a swift solution for your liquidity needs.
        </AccordionItem>

        <AccordionItem header="What does asset tokenization mean, and how does it benefit me?">
          Asset tokenization is the process of converting your physical
          valuables into digital tokens on the blockchain. This not only
          enhances the security and liquidity of your asset but also opens up
          new avenues for investment and loan procurement.
        </AccordionItem>
      </Accordion>
    </Wrapper>
  );
}
