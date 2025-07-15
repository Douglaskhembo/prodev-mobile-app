import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const SPACING = {
  small: 8,
  medium: 16,
  large: 24,
};

const COLORS = {
  primary: "#34967C",
  white: "#ffffff",
  gray: "#f2f2f2",
  textGray: "#555",
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.gray,
  },

  // Search section
  searchGroup: {
    backgroundColor: COLORS.primary,
    padding: SPACING.medium,
    paddingTop: 48,
  },
  searchFormGroup: {
    backgroundColor: COLORS.white,
    borderRadius: 40,
    paddingHorizontal: SPACING.medium,
    paddingVertical: SPACING.small,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  searchControlGroup: {
    flex: 1,
  },
  searchFormText: {
    fontSize: 16,
    color: COLORS.textGray,
  },
  searchControl: {
    fontWeight: "600",
  },
  searchButton: {
    backgroundColor: COLORS.primary,
    padding: 10,
    borderRadius: 30,
    marginLeft: SPACING.small,
  },

  // Filter scroll section
  filterGroup: {
    flexDirection: "row",
    gap: SPACING.medium,
    paddingHorizontal: SPACING.medium,
    paddingVertical: SPACING.small,
  },
  filterContainer: {
    alignItems: "center",
    width: 80,
    gap: SPACING.small,
  },

  // Listings
  listingContainer: {
    flex: 1,
    paddingHorizontal: SPACING.medium,
    marginTop: SPACING.medium,
  },
  paginationContainer: {
    marginTop: SPACING.medium,
    alignItems: "center",
  },
  showMoreButton: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    backgroundColor: COLORS.primary,
    borderRadius: 30,
  },
  showMoreButtonText: {
    color: COLORS.white,
    fontWeight: "600",
    fontSize: 16,
  },
});
