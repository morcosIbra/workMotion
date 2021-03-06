import React, { FC, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { setError, fetchProfiles, updateProfile } from "../../store/actions";
import { RootState } from "../../../store";

import { TableRow } from "../../../common/components/Table/types";
import { EmployeeProfile } from "../../store/types";
import { allStatus, EmployeesTableHeaders } from "../../config/EmployeesTable";

import Popup from "../../../common/components/Popup";
import StepsArrows from "../../../common/components/StepsArrows";
import Table from "../../../common/components/Table";

import { EmployeesListWrapper, ErrorMsg } from "./style";
import Loading from "../../../common/components/Loading";

const EmployeesListContainer: FC = () => {
  const { profiles, error, loadingProfiles } = useSelector((state: RootState) => state.employees);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProfiles());
  }, []);

  const onStatusChange = (status: string, employeeId: number) => {
    const payload = {
      id: employeeId, body: { status }
    }
    dispatch(updateProfile(payload));
  };

  let tableRows: TableRow[] = [];
  if (profiles.length > 0)
    tableRows = profiles.map((profile: EmployeeProfile): TableRow => {
      return {
        key: `${profile.id}`,
        cols: [
          {
            key: "name" + profile.id,
            value: profile.name,
          },
          {
            key: "status" + profile.id,
            value: (
              <StepsArrows
                steps={allStatus}
                activeStep={profile.status}
                onStepClick={onStatusChange}
                onStepClickArgs={[profile.id]}
              />
            )
          },
        ],
      };
    });

  const clearError = () => {
    dispatch(setError(''));
  }

  return (
    <EmployeesListWrapper>
      {loadingProfiles && <Loading />}
      {error && <Popup onClose={clearError}>
        <ErrorMsg>{error}</ErrorMsg>
      </Popup>}
      {tableRows.length > 0 && (
        <Table headers={EmployeesTableHeaders} rows={tableRows} />
      )}
    </EmployeesListWrapper>
  );
};

export default EmployeesListContainer;
