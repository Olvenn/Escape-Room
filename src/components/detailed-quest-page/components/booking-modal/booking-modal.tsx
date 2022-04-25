import { useAppDispatch, useAppSelector } from '../../../../hooks';
import { useState } from 'react';
import * as S from './booking-modal.styled';
import { ReactComponent as IconClose } from '../../../../assets/img/icon-close.svg';
import { setIsSending, setSuccessfully } from '../../../../store/reducers/booking';
import { BookingData } from '../../../../types/state';
import { FormEvent } from 'react';
import { bookingAction } from '../../../../store/api-actions';
import { useEffect } from 'react';
import { getIsSendingBooking, getIsSuccessBooking } from '../../../../store/reducers/selectors';

type BookingModalProps = {
  onCloseBtnClick: (item: boolean) => void,
  peoplePossible: number[];
}

const PHONE_REGEXP = /^\d{10}$/;
const NAME_REGEXP = /^[аА-яЯaA-zZ'][аА-яЯaA-zZ -' ]+[аА-яЯaA-zZ']?$/i;

const BookingModal = ({ onCloseBtnClick, peoplePossible }: BookingModalProps): JSX.Element => {
  const dispatch = useAppDispatch();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [peopleCount, setPeople] = useState(0);
  const [isLegal, setisLegal] = useState(false);

  const isLoading: boolean = useAppSelector(getIsSendingBooking);
  const isSuccess: boolean = useAppSelector(getIsSuccessBooking);

  const handleNameChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    evt.preventDefault();
    setName(evt.target.value);

    if (!NAME_REGEXP.test(evt.target.value.toString())) {
      evt.target.setCustomValidity('В имени могут быть только буквы.');
      evt.target.reportValidity();
    } else {
      evt.target.setCustomValidity('');
    }
  };

  const handlePhoneChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    evt.preventDefault();
    setPhone(evt.target.value);

    if (!PHONE_REGEXP.test(evt.target.value)) {
      evt.target.setCustomValidity('Не верный номер. Введите 10 цифр.');
      evt.target.reportValidity();
    } else {
      evt.target.setCustomValidity('');
    }
  };

  const handlePeopleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    evt.preventDefault();
    setPeople(+evt.target.value);
    if ((+evt.target.value < peoplePossible[0] || +evt.target.value > peoplePossible[1])) {
      evt.target.setCustomValidity('Такое количество участников в этом квесте не предусмотрено.');
      evt.target.reportValidity();
    } else {
      evt.target.setCustomValidity('');
    }
  };

  const handleLegalChange = () => {
    setisLegal(isLegal);
  };

  const onSubmit = (bookingData: BookingData) => {
    dispatch(bookingAction(bookingData));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    onSubmit({
      name,
      peopleCount,
      phone,
      isLegal: !isLegal,
    });

  };

  useEffect(() => {
    if (isSuccess === true) {
      dispatch(setIsSending(true));
      dispatch(setSuccessfully(false));
      onCloseBtnClick(false);
    }
  }, [isSuccess, dispatch, onCloseBtnClick]);

  return (
    <S.BlockLayer>
      <S.Modal>
        <S.ModalCloseBtn onClick={() => onCloseBtnClick(false)}>
          <IconClose width="16" height="16" />
          <S.ModalCloseLabel>Закрыть окно</S.ModalCloseLabel>
        </S.ModalCloseBtn>
        <S.ModalTitle>Оставить заявку</S.ModalTitle>
        <S.BookingForm
          action="https://echo.htmlacademy.ru"
          method="post"
          id="booking-form"
          onSubmit={handleSubmit}
        >
          <S.BookingField>
            <S.BookingLabel htmlFor="booking-name">Ваше Имя</S.BookingLabel>
            <S.BookingInput
              type="text"
              id="booking-name"
              name="booking-name"
              placeholder="Имя"
              required
              value={name}
              onChange={handleNameChange}
              disabled={isLoading}
            />
          </S.BookingField>
          <S.BookingField>
            <S.BookingLabel htmlFor="booking-phone">
              Контактный телефон
            </S.BookingLabel>
            <S.BookingInput
              type="tel"
              id="booking-phone"
              name="booking-phone"
              placeholder="Телефон"
              required
              value={phone}
              onChange={handlePhoneChange}
              disabled={isLoading}
            />
          </S.BookingField>
          <S.BookingField>
            <S.BookingLabel htmlFor="booking-people">
              Количество участников
            </S.BookingLabel>
            <S.BookingInput
              type="number"
              id="booking-people"
              name="booking-people"
              placeholder="Количество участников"
              required
              value={peopleCount}
              onChange={handlePeopleChange}
              disabled={isLoading}
              min={peoplePossible[0]}
              max={peoplePossible[1]}
            />
          </S.BookingField>
          <S.BookingSubmit type="submit">Отправить заявку</S.BookingSubmit>
          <S.BookingCheckboxWrapper>
            <S.BookingCheckboxInput
              type="checkbox"
              id="booking-legal"
              name="booking-legal"
              required
              onChange={handleLegalChange}
              disabled={isLoading}
            />
            <S.BookingCheckboxLabel
              className="checkbox-label"
              htmlFor="booking-legal"
            >
              <S.BookingCheckboxText>
                Я согласен с{' '}
                <S.BookingLegalLink href="#">
                  правилами обработки персональных данных и пользовательским
                  соглашением
                </S.BookingLegalLink>
              </S.BookingCheckboxText>
            </S.BookingCheckboxLabel>
          </S.BookingCheckboxWrapper>
        </S.BookingForm>
      </S.Modal>
    </S.BlockLayer>
  );
};

export default BookingModal;
